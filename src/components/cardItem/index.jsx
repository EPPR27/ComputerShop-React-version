import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function CardItem(props) {
  return (
    <Card className="border-1" style={{ width: "18rem" }}>
      <Card.Img variant="top" src={require(`../${props.img}`)} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.description}</Card.Text>
        <Button variant="primary">{props.price}</Button>
      </Card.Body>
    </Card>
  );
}

export default CardItem;
