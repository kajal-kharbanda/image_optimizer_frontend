// import React from 'react'
// import { Card, Container, Row, Col, Button } from 'react-bootstrap';
// import { useNavigate } from 'react-router-dom';

// const features = [
//   { title: 'Crop', path: '/crop', text: 'Trim and adjust your images.' },
//   { title: 'Resize', path: '/resize', text: 'Change dimensions easily.' },
//   { title: 'Compress', path: '/compress', text: 'Reduce file size.' },
//   { title: 'Convert', path: '/convert', text: 'Switch formats.' },
// ]

// const AppProduct = () => {
//   const nav = useNavigate()
//   return (
//     <Container className="py-5">
//       <Row className="g-4">
//         {features.map((f) => (
//           <Col key={f.title} xs={12} md={6} lg={3}>
//             <Card className="h-100 text-center">
//               <Card.Body>
//                 <Card.Title>{f.title}</Card.Title>
//                 <Card.Text>{f.text}</Card.Text>
//                 <Button variant="primary" onClick={() => nav(f.path)} >
//                   Go to {f.title}
//                 </Button>
//               </Card.Body>
//             </Card>
//           </Col>
//         ))}
//       </Row>
//     </Container>
//   )
// }

// export default AppProduct;
import React from 'react'
import { Card, Container, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import useFadeInOnMount from './useFadeInOnMount';
// import './AppProduct.css'; // Create and import this CSS file

const features = [
  { title: 'Crop', path: '/crop', text: 'Trim and adjust your images.' },
  { title: 'Resize', path: '/resize', text: 'Change dimensions easily.' },
  { title: 'Compress', path: '/compress', text: 'Reduce file size.' },
  { title: 'Convert', path: '/convert', text: 'Switch formats.' },
];

const AppProduct = () => {
  const nav = useNavigate();
  const isVisible = useFadeInOnMount(3500);

  return (
    <Container className="py-5">
      <Row className="g-4">
        {features.map((f) => (
          <Col key={f.title} xs={12} md={6} lg={3}>
            <div  className={`fade-in ${isVisible ? 'visible' : ''}`}>
            <Card className="feature-card h-100 text-center shadow-sm">
              <Card.Body>
                <div className="icon-circle mb-3">{f.title.charAt(0)}</div>
                <Card.Title className="fw-bold">{f.title}</Card.Title>
                <Card.Text>{f.text}</Card.Text>
                <Button variant="outline-primary" onClick={() => nav(f.path)}>
                  Explore {f.title}
                </Button>
              </Card.Body>
            </Card>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default AppProduct;
