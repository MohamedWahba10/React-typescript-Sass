
import Alert from './components/Alert/Alert';
import { BellRing, BookCheck, Info, CheckCircle, Circle } from 'lucide-react';

function App() {
  return (
    <>
      <div style={{ margin: '2rem' }}>
        <Alert
          type="alert-danger"
          icon={<BellRing size={20} />}
          tittle="Error"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, repudiandae iste minus at corporis alias?"
        />
      </div>
      <div style={{ margin: '2rem' }}>
        <Alert
          type="alert-success"
          icon={<BookCheck size={20} />}
          tittle="Success"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, repudiandae iste minus at corporis alias?"
        />
      </div>
      <div style={{ margin: '2rem' }}>
        <Alert
          type="alert-info"
          icon={<Info size={20} />}
          tittle="Info"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, repudiandae iste minus at corporis alias?"
        />
      </div>
      <div style={{ margin: '2rem' }}>
        <Alert
          type="alert-grey"
          icon={<Circle size={20} />}
          tittle="Grey"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, repudiandae iste minus at corporis alias?"
        />
      </div>
      <div style={{ margin: '2rem' }}>
        <Alert
          type="alert-primary"
          icon={<CheckCircle size={20} />}
          tittle="Primary"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, repudiandae iste minus at corporis alias?"
        />
      </div>
    </>
  );
}

export default App;
