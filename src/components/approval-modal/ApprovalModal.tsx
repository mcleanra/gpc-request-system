import React, { useState, useEffect, useReducer } from "react";
import { Request } from "../../services/models/Request";
import { Modal, Button, ButtonToolbar, Alert } from "react-bootstrap";
import { ApprovalAction } from "../../constants/ApprovalActions";
import { useFormInputHandler } from "../approval-forms/ApprovalFormInputs";

const requestApprovalReducer = (
  request: Request,
  action: ApprovalAction
): Request => {
  let nextRequest = request;
  console.log(`reducer`, action);
  switch (action.type) {
    case "sendto":
      nextRequest.status = action.formInputs.status;
      break;
    case "approve":
      break;
    case "reject":
      break;
    default:
  }
  return nextRequest;
};

interface IProps {
  request: Request;
  action: ApprovalAction;
  show: boolean;
  onExited: () => void;
}
export const ApprovalModal = (props: IProps) => {
  const [show, setShow] = useState(props.show);
  const [state, dispatch] = useReducer(requestApprovalReducer, props.request);
  const { formInputs, setFormInputs, handleChange } = useFormInputHandler(
    props.action.formInputs
  );

  useEffect(() => {
    console.log(state);
  }, [state]);

  useEffect(() => {
    setShow(props.show);
  }, [props.show]);

  const onActionButtonClicked = () => {
    dispatch({ ...props.action, formInputs: formInputs });
  };

  return (
    <>
      {props.action && (
        <Modal
          centered
          size="lg"
          show={show}
          onHide={() => setShow(false)}
          onExited={() => props.onExited()}
          aria-labelledby="send-to-modal"
        >
          <Modal.Header closeButton>
            <Modal.Title id="send-to-modal">{props.action.action}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Alert variant={props.action.bootstrapClass}>
              {props.action.description}
            </Alert>
            <props.action.form
              action={props.action}
              handleChange={handleChange}
            />
          </Modal.Body>
          <Modal.Footer>
            <ButtonToolbar>
              <Button
                className="m-1"
                variant={props.action.bootstrapClass}
                onClick={() => onActionButtonClicked()}
              >
                {props.action.verb}
              </Button>
              <Button
                className="m-1"
                variant="outline-secondary"
                onClick={() => setShow(false)}
              >
                Cancel
              </Button>
            </ButtonToolbar>
          </Modal.Footer>
        </Modal>
      )}
    </>
  );
};