import React, { useEffect, useState } from 'react';

import { persons } from './persons';
import { Container, Table, Pagination } from 'react-bootstrap';
import { BsTextLeft } from 'react-icons/bs';
import { BsType } from 'react-icons/bs';
import { BsPlus } from 'react-icons/bs';

const Person: React.FC = () => {
  const showCount = 4;
  const initalPersonData = persons.slice(0, showCount);
	const [currentPage, setCurrentPage] = useState(1);
  const [personsData, setPersonsData] = useState(initalPersonData);


  useEffect(() => {

  }, [currentPage, personsData])

  const paginationCount = Math.ceil(persons.length/showCount);
  
  const nextPage = () => {
    const currentPersonData = currentPage < paginationCount ? 
              persons.slice(currentPage * showCount, showCount * currentPage + showCount) :
              persons.slice(showCount * (currentPage-1), persons.length);
    
    setPersonsData(currentPersonData);
    currentPage < paginationCount ? setCurrentPage(currentPage + 1) : setCurrentPage(paginationCount);
  }

  const previousPage = () => {
    const currentPersonData = currentPage === 1 ? 
              persons.slice(0, showCount) :
              persons.slice((currentPage-2) * showCount, showCount * (currentPage-2) + showCount) ;
    
    setPersonsData(currentPersonData);
    currentPage !== 1 && setCurrentPage(currentPage - 1);
  }
  

	return (
		<>
      <Container className="mt-5">
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th><BsType></BsType>Name</th>
              <th>@ Email</th>
              <th><BsTextLeft></BsTextLeft> Position</th>
            </tr>
          </thead>
          <tbody>
            {
              personsData && personsData.map((person, index) => {
                return (
                  <tr key={index}>
                    <td> { person.name } </td>
                    <td> { person.email } </td>
                    <td> { person.position } </td>
                  </tr>
                )
              })
            }
          </tbody>
          <tfoot>
            <tr>
              <td><BsPlus></BsPlus> New</td>
              <td></td>
              <td></td>
            </tr>
          </tfoot>
        </Table>
        <Pagination>
          <Pagination.Prev onClick={previousPage} />
          <Pagination.Item active>{ currentPage }</Pagination.Item>
          <Pagination.Next onClick={nextPage} />
        </Pagination>
      </Container>
		</>
	)
}

export default Person;