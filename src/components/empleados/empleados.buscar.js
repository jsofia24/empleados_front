import React from "react";
import { Row, Container } from "react-bootstrap";
import { request } from "../helper/helper";
import BootstrapTable from "react-bootstrap-table-next";
// import paginationFactory from 'react-bootstrap-table2-paginator';
import paginationFactory, {
  PaginationProvider,
  PaginationListStandalone,
  SizePerPageDropdownStandalone,
} from "react-bootstrap-table2-paginator";
import "./empleados.css";
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit';

const { SearchBar } = Search;
const products = [
  {
    id: 1,
    name: "cafe1",
    price: 1000,
  },
  {
    id: 2,
    name: "cafe2",
    price: 1000,
  },
  {
    id: 3,
    name: "cafe3",
    price: 1000,
  },
  {
    id: 4,
    name: "cafe4",
    price: 1000,
  },
  {
    id: 5,
    name: "cafe4",
    price: 1000,
  },
  {
    id: 6,
    name: "cafe4",
    price: 1000,
  },
  {
    id: 7,
    name: "cafe4",
    price: 1000,
  },
  {
    id: 8,
    name: "cafe4",
    price: 1000,
  },
  {
    id: 9,
    name: "cafe4",
    price: 1000,
  },
  {
    id: 10,
    name: "cafe4",
    price: 1000,
  },
  {
    id: 11,
    name: "cafe4",
    price: 1000,
  },
  {
    id: 12,
    name: "cafe4",
    price: 1000,
  },
  {
    id: 13,
    name: "cafe4",
    price: 1000,
  },
  {
    id: 14,
    name: "cafe4",
    price: 1000,
  },
  {
    id: 15,
    name: "cafe4",
    price: 1000,
  },
];
const columns = [
  {
    dataField: "id",
    text: "Product ID",
  },
  {
    dataField: "name",
    text: "Product Name",
  },
  {
    dataField: "price",
    text: "Product Price",
  },
];

export default class EmpleadosBuscar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    request
      .get("/empleados")
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const options = {
      custom: true,
      totalSize: products.length,
    };
    return (
      <Container id="empleados-buscar-container">
        <Row>
          <h1>Buscar Empleados</h1>
        </Row>
        <Row>
          <ToolkitProvider
            keyField="id"
            data={products}
            columns={columns}
            search
          >
            {(props) => (
              <div>
                <h3>Input something at below input field:</h3>
                <SearchBar {...props.searchProps} />
                <hr />

                <PaginationProvider pagination={paginationFactory(options)}>
                  {({ paginationProps, paginationTableProps }) => (
                    <div>
                      <SizePerPageDropdownStandalone {...paginationProps} />
                      <BootstrapTable 
                      keyField="id"
                      data={products}
                      columns={columns}
                      {...paginationTableProps}
                      {...props.baseProps}
                       />
                      <PaginationListStandalone
                        {...paginationProps}
                      />
                    </div>
                  )}
                </PaginationProvider>
              </div>
            )}
          </ToolkitProvider>
        </Row>
      </Container>
    );
  }
}
