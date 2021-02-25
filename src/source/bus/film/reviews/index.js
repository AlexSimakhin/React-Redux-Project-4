//core
import React from 'react';
import { Comment, Pagination } from 'antd';
import { UserOutlined } from '@ant-design/icons';

//hooks
import { useReviews } from './hooks/useReviews';

export const Reviews = ({reviews}) => {

   const { currentPage, setCurrentPage } = useReviews();

   return (
      <section>
         <h2>Reviews</h2>
         {reviews && reviews.map(item =>
            <Comment
               key={item.id}
               author={<h3>{item.author}</h3>}
               avatar={<UserOutlined />}
               content={<p>{item.content}</p>}
            />
         )}
         {(reviews.length > 10) &&
         <Pagination
            current={currentPage}
            total={reviews.length - 1}
            onChange={value => setCurrentPage(value)}
            showSizeChanger={false}
         />}
      </section>
   )
};