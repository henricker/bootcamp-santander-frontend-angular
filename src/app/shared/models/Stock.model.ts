class Stock {
  id: number;
  name: string;
  price: number;
  minimun: number;
  exclusiveMinimun: boolean;
  variation: number;
  date: string;
}

export default Stock;


/*

id	integer($int64)
name*	string
price*	number($double)
minimum: 0
exclusiveMinimum: false
date*	string($date)
variation*	number($double)

*/
