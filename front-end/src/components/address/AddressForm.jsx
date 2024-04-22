import React, { useContext, useEffect } from "react";
import { AddressContext } from "../../context/AddressContext";
import { EnviaContext } from "../../context/EnviaContext";
import { getValue } from "../../utils";

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
    setPropertyAddress("country", "MX");
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
        <option key={state.code_2_digits} value={state.code_2_digits}>
          {state.name}
        </option>
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
      <div className="container-fluid mb-3">
        <label htmlFor="name" className="form-label">
          Nombre <span className="small text-danger">*</span>
        </label>
        <input
          type="text"
          id="text"
          name="name"
          required
          className="form-control"
          value={getValue(address, "name")}
          onChange={(event) => setPropertyAddress("name", event.target.value)}
        />
      </div>
      <div className="container-fluid mb-3">
        <label htmlFor="company" className="form-label">
          Empresa (opcional)
        </label>
        <input
          type="text"
          id="text"
          name="company"
          className="form-control"
          value={getValue(address, "company")}
          onChange={(event) =>
            setPropertyAddress("company", event.target.value)
          }
        />
      </div>
      <div className="container-fluid mb-3">
        <label htmlFor="email" className="form-label">
          Correo Electrónico <span className="small text-danger">*</span>
        </label>
        <input
          type="text"
          id="text"
          name="email"
          required
          className="form-control"
          value={getValue(address, "email")}
          onChange={(event) => setPropertyAddress("email", event.target.value)}
        />
      </div>
      <div className="container-fluid mb-3">
        <label htmlFor="phone" className="form-label">
          Teléfono <span className="small text-danger">*</span>
        </label>
        <input
          type="text"
          id="text"
          name="phone"
          required
          className="form-control"
          value={getValue(address, "phone")}
          onChange={(event) => setPropertyAddress("phone", event.target.value)}
        />
      </div>
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
        <label htmlFor="district" className="form-label">
          Colonia <span className="small text-danger">*</span>
        </label>
        <input
          type="text"
          required
          id="district"
          name="district"
          className="form-control"
          value={getValue(address, "district")}
          onChange={(event) =>
            setPropertyAddress("district", event.target.value)
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
        <label htmlFor="postalCode" className="form-label">
          Código Postal <span className="small text-danger">*</span>
        </label>
        <input
          type="text"
          id="postalCode"
          name="postalCode"
          className="form-control"
          value={getValue(address, "postalCode")}
          onChange={(event) =>
            setPropertyAddress("postalCode", event.target.value)
          }
        />
      </div>
      <div className="col-md-4 col-4 mb-2">
        <label htmlFor="state" className="form-label">
          Estado <span className="small text-danger">*</span>
        </label>
        <select
          onChange={(event) => setPropertyAddress("state", event.target.value)}
          className="form-control"
        >
          {renderStates()}
        </select>
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
