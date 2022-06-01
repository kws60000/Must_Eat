import { useEffect } from 'react'
import { useRecoilValue, useRecoilState } from 'recoil'
import styled from 'styled-components'

import { SearchInput, SearchResult, MapComponent } from 'components'
import { searchIpState, searchResState } from 'recoil/atom/map'
import * as Constants from 'constants/mapContants'
import apiKey from 'key.json'

const MapContainer = () => {

  const searchIp = useRecoilValue(searchIpState)
  const [searchRes, setSearchRes] = useRecoilState(searchResState)

  const searchOption = {
    page: 1,    
    x: Constants.SEARCH_OPT_X,
    y: Constants.SEARCH_OPT_Y,
    category_group_code: Constants.SEARCH_OPT_CATEGORY_FOOD   
  }

  /* global kakao */
  // 최초 렌더링 시 스크립트에 api 정보 추가
  useEffect(() => {
    const script = document.createElement('script')
    script.onload = () => kakao.maps.load(initMap)
    script.src = Constants.KAKAO_MAP_API_URL
               +    apiKey.API_KEY_KAKAO_MAP_LOCAL
               + Constants.KAKAO_MAP_API_SERVICES
    document.head.appendChild(script)
  }, [])
  
  const initMap = () => {
    const mapOptions = {
      center: new kakao.maps.LatLng(Constants.POSITION_LAT_CDNT, Constants.POSITION_LNG_CDNT),
      level: 8
    }
    const container = document.getElementById('map')
    new kakao.maps.Map(container, mapOptions)
  }

  const keywordSearch = async (firstSearch) => {
    const places = new kakao.maps.services.Places()
    if (firstSearch) {
      setSearchRes([])
      await places.keywordSearch(searchIp, keywordSearchCB, searchOption)
    }
  }

  const keywordSearchCB = async (res, status) => {
    const resStatus = kakao.maps.services.Status
    if (status === resStatus.OK) {
      setSearchRes(res)
    } else if (status === resStatus.ZERO_RESULT) {
      alert('검색 결과가 없습니다!')
    } else {
      alert('서버 응답에 문제가 있습니다!')
    }
  }

  return (
    <Wrapper>
      <Container>
        <SearchInput
          onSearch={() => keywordSearch(true)}
        />
        <SearchResult searchRes={searchRes}/>
      </Container>
      <MapComponent />
    </Wrapper>
  )
}

const Wrapper = styled.div`
`

const Container = styled.div`
  background: white;
  position: absolute;
  z-index: 20;
  width: 390px;
  height: 100vh;
  box-shadow: 0 0 5px 0 rgb(0 0 0 / 20%), 5px 0 15px 0 rgb(0 0 0 / 10%);
`

export default MapContainer