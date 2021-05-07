import React, { useEffect, useState } from 'react';
import { get_persons_per_page } from '../helpers/personHelper';
import { add_new_person } from '../helpers/personHelper';

import { persons } from './persons';
import { Container, Table, Pagination } from 'react-bootstrap';
import { BsTextLeft } from 'react-icons/bs';
import { BsType } from 'react-icons/bs';
import { BsPlus } from 'react-icons/bs';

const Person: React.FC = () => {
  const limit = 5;
	const [currentPage, setCurrentPage] = useState(1);
  const [personsData, setPersonsData] = useState([]);
  
  useEffect(() => {
    get_persons_per_page(limit, currentPage)
      .then((res) => {
        console.log(res.data);
        setPersonsData(res.data)
      })
  }, [currentPage])

  const paginationCount = Math.ceil(persons.length/limit);
  
  const nextPage = () => {
    currentPage < paginationCount ? setCurrentPage(currentPage + 1) : setCurrentPage(paginationCount);
  }

  const previousPage = () => {
    currentPage !== 1 && setCurrentPage(currentPage - 1);
  }

  const addNewPerson = () => {
    const newPerson = {
      id: '',
      name: '',
      email: '',
      position: ''
    };

    add_new_person(newPerson)
      .then((res) => {
        console.log("res", res);
      })
  }

	return (
		<>
      <Container className="mt-5">
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th><BsType></BsType> Name</th>
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
            <tr onClick={addNewPerson} style={{cursor: "pointer"}}>
              <td style={{borderWidth: "1px 0px 1px 1px"}}><BsPlus></BsPlus> New</td>
              <td style={{borderWidth: "1px 0px 1px 0px"}}></td>
              <td style={{borderWidth: "1px 1px 1px 0"}}></td>
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