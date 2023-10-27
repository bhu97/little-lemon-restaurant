import image1 from '../assets/image1.jpeg';
const Order = () => {
  return (
    <div className='row p-4'>
      <div className='col'>
        <h3>Noodles</h3>
        <h6>
          A cooked egg-and-flour paste prominent in European and Asian cuisine,
          generally distinguished from pasta by its elongated ribbonlike form.
          Noodles are commonly used to add body and flavour to broth soups.
        </h6>
        <p>$5.46</p>
      </div>
      <div className='col d-flex flex-row-reverse'>
        <div>
          <img
            src={image1}
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
  );
};

export default Order;
