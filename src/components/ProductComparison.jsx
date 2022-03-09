import React, { useState } from "react";
import { Header, Grid, Item, Table, Label } from "semantic-ui-react";
import ProductCard from "./ProductCard";

const style = {
  h1: {
    marginTop: "3em"
  },
  h2: {
    margin: "4em 0em 2em"
  },
  h3: {
    marginTop: "2em",
    padding: "2em 0em"
  },
  last: {
    marginBottom: "300px"
  }
};

const ProductComparison = ({ products }) => {
  const [selectedItems, setSelectedItems] = useState([]);

  const addToCompare = (item) => {
    setSelectedItems((selectedItems) => [...selectedItems, item]);
  };

  const removeFromCompare = (item) => {
    const filteredItems = selectedItems.filter(
      (product) => product.id !== item.id
    );
    setSelectedItems((selectedItems) => filteredItems);
  };

  return (
    <div>
      <Header
        as="h1"
        content="Compare Items"
        style={style.h1}
        textAlign="center"
      />
      {selectedItems.length > 0 && (
        <Table definition>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell></Table.HeaderCell>
              {selectedItems.map((el) => (
                <Table.HeaderCell key={el.id}>{el.name}</Table.HeaderCell>
              ))}
            </Table.Row>
          </Table.Header>
          <Table.Body>
            <Table.Row>
              <Table.Cell>
                <Label color="orange" ribbon>
                  Price
                </Label>
              </Table.Cell>
              {selectedItems.map((el) => (
                <Table.Cell key={el.id}>{el.price}</Table.Cell>
              ))}
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <Label color="teal" ribbon>
                  Description
                </Label>
              </Table.Cell>
              {selectedItems.map((el) => (
                <Table.Cell key={el.id}>{el.description}</Table.Cell>
              ))}
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <Label color="pink" ribbon>
                  Condition
                </Label>
              </Table.Cell>
              {selectedItems.map((el) => (
                <Table.Cell key={el.id}>{el.condition}</Table.Cell>
              ))}
            </Table.Row>
          </Table.Body>
        </Table>
      )}
      <Grid columns={selectedItems.length} stackable padded divided>
        <Item.Group>
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              selected={selectedItems}
              addToCompare={addToCompare}
              removeFromCompare={removeFromCompare}
            />
          ))}
        </Item.Group>
      </Grid>
    </div>
  );
};

export default ProductComparison;
