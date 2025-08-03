import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { deleteItem } from "./cartSlice";
/* eslint-disable */

function DeleteItem ({ pizzaId }) {
  const dispatch = useDispatch();
  return (
    <div className="">
     
        <Button type='small' onClick={() => dispatch(deleteItem(pizzaId))}>Delete</Button>

    </div>
  );
};

export default DeleteItem;