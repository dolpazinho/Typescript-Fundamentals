import {productsURL} from "../lib";


const prefix = '🐉 ';

type ProductType = {
  id: number,
  name: string,
  icon?: string
}

export default async function updateOutput(id: string) {
const products = await getProducts();
const output = document.querySelector(`#${id}`);
const html = layoutProducts(products);

if(output && html) {
  output.innerHTML = html;
}
}

function layoutProducts(products: ProductType[]) {
  const items = products.map(({id, name, icon}) => {
    const productHtml = `
    <span class="card-id"> #${id}</span>
        <i class="card-icon ${icon} fa-lg"></i>
    <span class="card-name">${name}</span>`;

    const cardHtml = `
    <li>
    <div class="card">
    <div class="card-content">
    <div class="content">
    ${productHtml}
</div>
</div>
</div>
    </li>
    `
    return cardHtml;
  });
  let productsHtml = `<ul>${items.join('')}</ul>`;
  return productsHtml;
}

async function getProducts(): Promise<ProductType[ ]> {
  const response: Response = await fetch(productsURL);
  const products: ProductType[] = await response.json();
  return products;
}

runTheLearningSamples();

function runTheLearningSamples () {
  //hoisted means to lift-up
    function displayProductInto(id: number, name: string) {
      console.log(`${prefix} typed parameters`);
      console.log(`product id= ${id} and name=${name}`)
    }

    displayProductInto(10, 'Pizza');


  console.log(`${prefix} Function declaration`);
  console.log(addNumberDeclaration(7, 11))

    function addNumberDeclaration (x: number, y: number): number {
      const sum: number = x + y;
      return sum;
    }

    const addNumbersExpression = function (x: number, y: number) {
    const sum: number = x+y;
    return sum;
    };

  console.log(`${prefix}, function expression`);
  console.log(addNumberDeclaration(7, 21));


  const sampleProducts = [
    {
      id: 10,
      name: 'Pizza Slice',
      icon: 'fas fa-pizza-slice'
    },
    {
      id: 20,
      name: 'Ice cream',
      icon: 'fas fa-ice-cream'
    },
    {
      id: 30,
      name: 'Cheese',
      icon: 'fas fa-cheese'
    }
  ];

  function getProductNames(): string[] {
    return sampleProducts.map((p) => p.name);
  }

  console.log(`${prefix} return Array`);
  console.log(getProductNames());

  function getProductById(id: number): ProductType | undefined {
    return sampleProducts.find((p) => id === p.id);
  }

  console.log(`${prefix}, return Product Type `)
  console.log(getProductById(10));

  function displayProducts(products: ProductType[]): void {
    const productNames2 = products.map( function (p) {
      const name = p.name.toLowerCase();
      return name;
    });

    const productNames = products.map((p) => {
      const name = p.name.toLowerCase();
      return name;
    });

    const msg = `Sample products Include: ${productNames.join(', ')}`;
    console.log(`${prefix}, return void`);
    console.log(msg);
  }

  displayProducts(sampleProducts)

  const getRandomInt = (max: number = 10) => Math.floor(Math.random() * max);

  function createProducts(name: string, icon?: string): ProductType {
    const id = getRandomInt(10000);
    return {
      id,
      name,
      icon
    };
  }

  console.log(`${prefix} Optional Parameters`);
  let pineapple = createProducts('pineapple', 'pine-apple.jpg');
  let mango = createProducts('mango');
  console.log(pineapple, mango)


  function createProductWithDefaults(name: string, icon: string = 'generic-fruit.jpg'): ProductType {
    const id = getRandomInt();
    return {
      id,
      name,
      icon
    };
  }


  console.log(`${prefix} Default Parameters`);
  pineapple = createProductWithDefaults('pineapple', 'pine-apple.jpg');
  mango = createProductWithDefaults('mango');
  console.log(pineapple, mango)


  function buildAddress(street: string, city: string, ...restOfAddress: string[]) {
    console.table(restOfAddress);
  const address = `${street} ${city} ${restOfAddress.join(', ')}`;
  return address;
  }

  const someAddress = buildAddress(
      '395 Mulheimer Str',
      'Oberhausen',
      'Floor 2',
      'Germany',
      );
  console.log(`${prefix} Some Rest Parameters`)
  console.log(someAddress);


  function displayProduct({id, name}: ProductType): void {
    console.log(`${prefix}, Destructuring Parameters`);
    console.log(`Product id=${id} and name=${name}`);
  }
  const prod = getProductById(20);
  if (prod) {
    displayProduct(prod);
  }
}