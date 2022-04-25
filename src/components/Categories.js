import {
  Box,
  HStack,
  InputGroup,
  Input,
  InputLeftElement,
} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import React from 'react';
import CategoriesBox from './CategoriesBox';
import catgBox from '.././styles/catgBox.module.css';

function Categories() {
  return (
    <div>
      <Box>
        <HStack spacing="850px">
          <h2 className={catgBox.heading}>Categories</h2>
          <InputGroup className={catgBox.categoryinput}>
            <InputLeftElement
              pointerEvents="none"
              children={<SearchIcon color="gray.300" />}
            />
            <Input type="text" placeholder="Search Categories..." />
          </InputGroup>
        </HStack>
        <div className={catgBox.boxdiv}>
          <CategoriesBox />
          <CategoriesBox />
          <CategoriesBox />
          <CategoriesBox />
          <CategoriesBox />
          <CategoriesBox />
          <CategoriesBox />
          <CategoriesBox />
        </div>
      </Box>
    </div>
  );
}

export default Categories;
