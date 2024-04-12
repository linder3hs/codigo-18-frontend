/* eslint-disable react/prop-types */

export default function Modal(props) {
  return (
    <>
      <div
        id="modal"
        className={`relative z-50 w-full ${props.open ? "" : "hidden"}`}
      >
        <div className="fixed inset-0 bg-black/30"></div>
        <div className="fixed inset-0 w-full p-6 flex justify-center items-center rounded-md">
          <div className="bg-white p-5 mx-auto w-full max-w-md border rounded-md">
            <div
              className="w-full text-right cursor-pointer"
              onClick={props.handleClose}
            >
              ❌
            </div>
            <div id="modal-title" className="mb-5">
              <h2 className="text-2xl font-semibold">{props.title}</h2>
            </div>
            <div id="modal-content">{props.children}</div>
          </div>
        </div>
      </div>
    </>
  );
}
