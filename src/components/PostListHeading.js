import React from 'react';
import {
  Table,
  Thead,
  Tr,
  Th,
  TableContainer,
  VisuallyHidden,
} from '@chakra-ui/react';

function PostListHeading() {
  return (
    <TableContainer>
      <Table variant="simple" size="lg">
        <Thead>
          <Tr>
            <Th width={4000}>Topic</Th>
            {/* <VisuallyHidden> */}
            <Th width={500}>Category</Th>
            <Th>Likes</Th>
            <Th>Replies</Th>
            <Th>Views</Th>
            <Th>Activity</Th>
            {/* </VisuallyHidden> */}
          </Tr>
        </Thead>
      </Table>
    </TableContainer>
  );
}

export default PostListHeading;
