import image1 from '../assets/image1.jpeg';
const Order = (props) => {
  console.log(props)
  return (
    <>
      <h2>{props.category.category}</h2>
      {props?.category?.items?.map((item) => (
        <div className='row p-4'>
          <div className='col'>
            <h3>{item?.name}</h3>
            <h6>
              {item?.description}
            </h6>
            <p>${item?.price}</p>
          </div>
          <div className='col d-flex flex-row-reverse'>
            <div>
              <img
                src={item?.image}
                style={{
                  height: '120px',
                  objectFit: 'cover',
                  borderRadius: '10px',
                }}
                alt='image1'
              />
              <div className='border d-flex justify-content-between p-1'>
                <div className='p-1' style={{ fontSize: 18, fontWeight: 'bold' }}>
                  -
                </div>
                <div style={{ fontSize: 18 }}>0</div>
                <div className='p-1' style={{ fontSize: 18, fontWeight: 'bold' }}>
                  +
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>

  )
}

export default Order;
