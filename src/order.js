function takeOrder(order,deliveryOrders) {
  if(deliveryOrders.length < 3)
  return deliveryOrders.push(order)
  }

function refundOrder(x,deliveryOrders) {
  deliveryOrders.splice(x-1, 1)
}

function listItems(deliveryOrders) {
  var orders = []
  for (var i = 0; i < deliveryOrders.length; i++) {
    orders.push(deliveryOrders[i].item)
  }
return orders.join(", ")
}


function searchOrder(deliveryOrders, x) {
  if (deliveryOrders.includes(x) === true) {
    return true;
  }else{
    return false;
  }
}

module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}