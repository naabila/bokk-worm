import React, { useEffect, useState } from 'react';
import DynamicTitle from '../components/DynamicTitle';
import { Fade } from 'react-awesome-reveal';
import GridView from '../components/GridView';
import TableView from '../components/TableView';
import SectionBanner from '../components/SectionBanner';
import useAxiosSecure from '../hook/useAxiosSecure';

function AllBooks() {
  const axios = useAxiosSecure();
  const [view, setView] = useState('Grid');
  const [books, setBooks] = useState([]);
  const [showAvailable, setShowAvailable] = useState(false);

  // Fetching book data
  useEffect(() => {
    fetchBookData();
  }, [axios]);

  const fetchBookData = async () => {
    try {
      const { data } = await axios.get('/add-books');
      setBooks(data);
    } catch (err) {
      console.log('Error loading Books data', err);
    }
  };

  // Available books
  const filteredBooks = showAvailable
    ? books.filter((book) => book.quantity > 0)
    : books;

  return (
    <>
      <DynamicTitle title="All books" />
      <SectionBanner title="See All Books" />
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <p className="text-red-500 font-bold text-2xl">{view} View</p>
          <div>
            <select value={view} onChange={(e) => setView(e.target.value)}>
              <option value="Grid">Grid View</option>
              <option value="Table">Table View</option>
            </select>

            <button
              onClick={() => setShowAvailable(!showAvailable)}
              className="bg-red-500 mx-5 text-white p-3 px-5"
            >
              {showAvailable ? 'Show All Books' : 'See Available Books'}
            </button>
          </div>
        </div>
        <Fade className="my-[100px]">
          {view === 'Grid' ? (
            <GridView books={filteredBooks} />
          ) : (
            <TableView books={filteredBooks} />
          )}
        </Fade>
      </div>
    </>
  );
}

export default AllBooks;
             