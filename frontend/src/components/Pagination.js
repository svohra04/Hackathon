import './style/Pagination.css'


function Pagination({ pageNumber, totalPages}) {
    return (
        <ul className="pagination-bar">
        {totalPages.map(function(page){
            return <li className="pagination-item"><button>{page}</button></li>
        })}
        </ul>
    )
}

export default Pagination