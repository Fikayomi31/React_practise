import './App.css'
import MyButton from './utils'

function App() {
  const user = {
    name: 'Hedy Lamarr',
    imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
    imageSize: 100,
  };
  const products = [
    { title: 'Cabbage', id: 1 },
    { title: 'Garlic', id: 2 },
    { title: 'Apple', id: 3 },
    { title: 'Orange', id: 4},
    { title: 'Mango', id: 5}
  ];
  const listItems = products.map(product =>
    <li key={product.id}>
      {product.title}
    </li>
  );

  const prods = [
    { title: 'Cabbage', isFruit: false, id: 1 },
    { title: 'Garlic', isFruit: false, id: 2 },
    { title: 'Apple', isFruit: true, id: 3 },
    { title: 'Orange', isFruit: true, id: 4},
  ]
  const list = prods.map(prod =>
    <li key={prod.id}
      style={{
        color:prod.isFruit ? 'magenta' : 'darkgreen'
      }}
    >
      {prod.title}
    </li>
  )

  return (
    <>
      <img
      className="avatar"
      src="https://i.imgur.com/1bX5QH6.jpg"
      alt="Lin Lanying"
      width={100}
      height={100}
      />
      <h1>{user.name}</h1>
        <img
          className="avatar"
          src={user.imageUrl}
          alt={'Photo of ' + user.name}
          style={{
            width: user.imageSize,
            height: user.imageSize
          }}
        />
        
        <ul>{listItems}</ul>
        <ul>{list}</ul>
        <MyButton /><br></br>
        <MyButton />
    </>
  )
}

export default App
