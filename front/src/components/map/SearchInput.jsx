import React from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { AiOutlineSearch } from 'react-icons/ai';

import { searchIpState } from '@recoil/atom/map';

const SearchInput = ({ onSearch }) => {
    const [searchIp, setSearchIp] = useRecoilState(searchIpState);

    const onChange = e => {
        setSearchIp(() => e.target.value);
    };

    const onEnterPress = e => {
        if (e.key === 'Enter') onSearch();
    };

    return (
        <Container>
            <InputBox>
                <InputField
                    type="text"
                    value={searchIp}
                    onChange={onChange}
                    onKeyPress={onEnterPress}
                    placeholder="Must Eat 지도 검색"
                />
                <SearchButton onClick={onSearch}>
                    <AiOutlineSearch size={24} />
                </SearchButton>
            </InputBox>
        </Container>
    );
};

const Container = styled.div`
    width: 20rem;
    padding: 1rem 1.6rem;
`;

const InputBox = styled.div`
    height: 3rem;
    padding: 0 0.6rem;
    border-radius: 0.5rem;
    box-shadow: 0 0.125rem 0.25rem rgb(0 0 0 / 20%), 0 0.06rem 0 rgb(0 0 0 / 2%);
    position: relative;
`;

const InputField = styled.input`
    border: 0 none;
    outline: none;
    height: 1.2rem;
    line-height: 1.2;
    padding: 0.75rem 1rem 1rem;
    font-size: 1rem;
`;

const SearchButton = styled.button`
    position: absolute;
    height: 3rem;
    padding: 0.6rem 0;
    right: 1rem;
    border: none;
    background: none;
    cursor: pointer;

    svg {
        color: silver;
        &:hover {
            color: #3c4043;
        }
    }
`;

export default SearchInput;
