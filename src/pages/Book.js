import { useEffect, useState } from "react";
import axios from 'axios'


const Book = () => {

    const [books, setBooks] = useState([]) 

    const fetchBooks = async () => {

        let url = process.env.REACT_APP_BASE_URL+"/books"

        await axios.get(url, {
            headers: {
                'Accept': 'application/json'
            }
        }).then((response) => {

            if (response.status == 200) {

                console.log(response.data);
                setBooks(response.data);
            }
        }).catch((error) => {
            console.log(error);
        })
    }

    useEffect(() => {
        fetchBooks()

        console.log(books);
    }, [])


    return (
        <>
            <div className="row">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-header">
                            <h3 className="card-title">Bordered Table</h3>
                        </div>
                        <div className="card-body">
                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Title</th>
                                        <th>Price</th>
                                        <th>Created_At</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        books.map((book) => {
                                            <tr key={book.id}>
                                                <td>{book.id}</td>
                                                <td>{book.title}</td>
                                                <td>{book.price}</td>
                                                <td>{book.created_at}</td>
                                            </tr>
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                        <div className="card-footer clearfix">
                            <ul className="pagination pagination-sm m-0 float-right">
                                <li className="page-item"><a className="page-link" href="#">&laquo;</a></li>
                                <li className="page-item"><a className="page-link" href="#">1</a></li>
                                <li className="page-item"><a className="page-link" href="#">2</a></li>
                                <li className="page-item"><a className="page-link" href="#">3</a></li>
                                <li className="page-item"><a className="page-link" href="#">&raquo;</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div> 
        </>
    );
}

export default Book;