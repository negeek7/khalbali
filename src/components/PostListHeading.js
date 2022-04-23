import React from 'react';
import { Table, Thead, Tr, Th, TableContainer } from '@chakra-ui/react';

function PostListHeading() {
  return (
    <TableContainer>
      <Table variant="simple" size="lg">
        <Thead>
          <Tr>
            <Th width={1900}>Topic</Th>
            <Th width={500}>Category</Th>
            <Th>Likes</Th>
            <Th>Replies</Th>
            <Th>Views</Th>
            <Th>Activity</Th>
          </Tr>
        </Thead>
      </Table>
    </TableContainer>
  );
}

export default PostListHeading;
