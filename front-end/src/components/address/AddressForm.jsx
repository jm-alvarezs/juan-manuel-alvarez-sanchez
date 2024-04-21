import React, { useContext, useEffect } from "react";
import { getValue } from "../../utils";
import { AddressContext } from "../../context/AddressContext";
import { EnviaContext } from "../../context/EnviaContext";

const AddressForm = ({
  title,
  saveAction,
  hideButtons,
  buttonTitle,
  handleCancel,
  handleCallback,
}) => {
  const { states, getStates } = useContext(EnviaContext);
  const { address, saveAddress, setPropertyAddress } =
    useContext(AddressContext);

  useEffect(() => {
    getStates();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (getValue(address, "city") === "") {
      return alert("Debes agregar tu ciudad.");
    }
    if (getValue(address, "state") === "") {
      return alert("Debes agregar tu estado.");
    }
    if (getValue(address, "country") === "") {
      return alert("Debes agregar tu país.");
    }
    if (typeof saveAction === "function") {
      return saveAction(address);
    }
    saveAddress(address, handleCallback);
  };

  const renderStates = () => {
    if (Array.isArray(states)) {
      return states.map((state) => (
        <option value={state.code_2_digits}>{state.name}</option>
      ));
    }
  };

  const renderButtons = () => {
    if (!hideButtons) {
      return (
        <div className="row mt-3">
          <div className="col">
            <button type="submit" className="btn btn-primary w-100">
              {buttonTitle ? buttonTitle : "Guardar"}
            </button>
          </div>
          {handleCancel && (
            <div className="col">
              <button
                type="button"
                onClick={handleCancel}
                className="btn text-muted w-100 px-0"
              >
                Cancelar
              </button>
            </div>
          )}
        </div>
      );
    }
  };

  return (
    <form className="row" onSubmit={handleSubmit}>
      {title && <h2>{title}</h2>}
      <div className="col-md-6 mb-2">
        <label htmlFor="street" className="form-label">
          Calle <span className="small text-danger">*</span>
        </label>
        <input
          type="text"
          id="text"
          name="street"
          required
          className="form-control"
          value={getValue(address, "street")}
          onChange={(event) => setPropertyAddress("street", event.target.value)}
        />
      </div>
      <div className="col-md-3 col-6 mb-2">
        <label htmlFor="number" className="form-label">
          Número <span className="small text-danger">*</span>
        </label>
        <input
          type="text"
          id="number"
          name="number"
          required
          className="form-control"
          value={getValue(address, "number")}
          onChange={(event) => setPropertyAddress("number", event.target.value)}
        />
      </div>
      <div className="col-md-3 col-6 mb-2">
        <label htmlFor="interiorNumber" className="form-label">
          Interior
        </label>
        <input
          type="text"
          id="interiorNumber"
          name="interiorNumber"
          className="form-control"
          value={getValue(address, "interior_number")}
          onChange={(event) =>
            setPropertyAddress("interior_number", event.target.value)
          }
        />
      </div>
      <div className="col-12 col-md-6 mb-2">
        <label htmlFor="neighborhood" className="form-label">
          Colonia <span className="small text-danger">*</span>
        </label>
        <input
          type="text"
          required
          id="neighborhood"
          name="neighborhood"
          className="form-control"
          value={getValue(address, "neighborhood")}
          onChange={(event) =>
            setPropertyAddress("neighborhood", event.target.value)
          }
        />
      </div>
      <div className="col-12 col-md-6 mb-2">
        <label htmlFor="city" className="form-label">
          Ciudad <span className="small text-danger">*</span>
        </label>
        <input
          type="text"
          id="city"
          name="city"
          className="form-control"
          value={getValue(address, "city")}
          onChange={(event) => setPropertyAddress("city", event.target.value)}
        />
      </div>
      <div className="col-md-4 col-12 mb-2">
        <label htmlFor="zip_code" className="form-label">
          Código Postal <span className="small text-danger">*</span>
        </label>
        <input
          type="text"
          id="zip_code"
          name="zip_code"
          className="form-control"
          value={getValue(address, "zip_code")}
          onChange={(event) =>
            setPropertyAddress("zip_code", event.target.value)
          }
        />
      </div>
      <div className="col-md-4 col-4 mb-2">
        <label htmlFor="state" className="form-label">
          Estado <span className="small text-danger">*</span>
        </label>
        <select className="form-control">{renderStates()}</select>
      </div>
      <div className="col-md-4 col-12 mb-2">
        <label htmlFor="country" className="form-label">
          País <span className="small text-danger">*</span>
        </label>
        <input
          type="text"
          id="state"
          name="state"
          disabled
          className="form-control"
          value="México"
          required
        />
      </div>
      <div className="col-12">{renderButtons()}</div>
    </form>
  );
};

export default AddressForm;
