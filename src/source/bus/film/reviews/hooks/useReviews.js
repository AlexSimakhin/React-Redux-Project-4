//core
import { useState } from 'react';

export const useReviews = () => {

   const [currentPage, setCurrentPage] = useState(1);


   return {
      currentPage,
      setCurrentPage,
   }
};