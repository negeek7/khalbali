import React from 'react';
import {
  Table,
  Thead,
  Tr,
  Box,
  Th,
  TableContainer,
  VisuallyHidden,
} from '@chakra-ui/react';
import postHeaderStyle from '.././styles/postHeader.module.css';

function PostListHeading() {
  return (
    <div>
      <TableContainer>
        <Table variant="simple" size="lg">
          <Thead>
            <Tr>
              <Th width={4000}>Topic</Th>
              <Th width={500}>Category</Th>
              <Th>Likes</Th>
              <Th>Replies</Th>
              <Th>Views</Th>
              <Th>Activity</Th>
            </Tr>
          </Thead>
        </Table>
      </TableContainer>
    </div>
  );
}

export default PostListHeading;
