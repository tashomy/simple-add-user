import Card from "../UI/Card";

const ShowUser = (props) => {
  return (
    <Card className="card-wrap">
      {props.users.map((item) => {
        return (
          <div key={item.id}>
            <h3>{item.name}</h3>
            <p>{item.email}</p>
          </div>
        );
      })}
    </Card>
  );
};

export default ShowUser;
