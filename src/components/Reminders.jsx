import React from "react";
import { Button, Modal, ModalHeader,
  ModalBody, ModalFooter, Form, FormGroup, Input } from 'reactstrap';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';

// class Reminders extends React.Component {

//   state = {
//     reminderDescription:'',
//     reminderDueDate: Date
//   };
  

//   render() {
//     return (
//       <div>
//         Reminders
//       </div>
//     );
//   }
// }


class NewReminders extends React.Component {
  
  state = {
    isModalOpen: false,
    selectedDay: null
  }

  toggleModal = () => {
    this.setState({
      isModalOpen: !this.state.isModalOpen
    });
  }

  // handleSubmit = () => {
  //   this.toggleModal();
  //   this.props.addReminder(
  //     values.reminderDescription,
  //     values.reminderDueDate
  //   );
  // }

  handleDayClick = (day, { selected }) => {
    this.setState({
      selectedDay: selected ? undefined : day,
    });
  }

  render() {
    return (
      <>
        <Button outline onClick={this.toggleModal}>
        New Reminder <i className="fa fa-plus"/>
        </Button>
        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal} style={{ width: '300px'}}>

          <ModalHeader>Add new reminder</ModalHeader>

          <ModalBody>
            <Form /*onSubmit={(values) => this.handleSubmit(values)}*/ >
            <FormGroup>
              <Input type="text" name="reminderText" id="reminderText" />
              </FormGroup>
              <FormGroup style={{ alignItems: "center" }}>
              <DayPicker 
                selectedDays={this.state.selectedDay}
                onDayClick={this.handleDayClick}
              />
              </FormGroup>
            </Form>
          </ModalBody>

          <ModalFooter>
            <Button color="primary" onClick={this.toggleModal} type="submit">Create Reminder</Button>{' '}
            <Button color="secondary" onClick={this.toggleModal}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </>
    );
  }

}

export default NewReminders;