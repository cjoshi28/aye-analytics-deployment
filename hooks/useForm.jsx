import React, { useEffect, useState } from 'react'
import { omit } from 'lodash'


const useForm = (callback) => {
	//Form values
	const [values, setValues] = useState({});
	//Errors
	const [errors, setErrors] = useState([]);
	const [onerror, setonError] = useState([])

	let errorObj = {};

	// ..............................................................................................................................
	const handleChange = (event) => {
		event.persist();

		let name = event.target.name;
		let val = event.target.value;
		let req = event?.target.attributes['input-required']?.value;
		let min = event?.target.attributes['min-length']?.value;
		let max = event?.target.attributes['max-length']?.value;
		let custom = event?.target.attributes['input-custom']?.value;
		let numeric = event?.target.attributes['input-numeric']?.value;
		let alphanumeric = event?.target.attributes['input-alphanumeric']?.value;
		let alphanumericsymbol = event?.target.attributes['input-alphanumericsymbol']?.value;
		let alpha = event?.target.attributes['input-alpha']?.value;
		let type = event.target.type;

		if (req || min || max || custom || numeric || alpha || alphanumeric || alphanumericsymbol) {
			if (!val) {
				setonError({ ...onerror, [name]: `${name} is required, Please enter !` })
			}
			else {
				let newObj = omit(errors, [name]);
				setErrors(newObj);
				setonError(newObj);
				if (min || max) {
					if (val.length < min) {
						setonError({ ...onerror, [name]: `${min} value  required, Please enter !` })
					}
					else if (val.length > max) {
						setonError({ ...onerror, [name]: `value must be less than ${max} !` })
					}
					else {
						let newObj = omit(errors, [name]);
						setErrors(newObj);
						setonError(newObj);
					}
				}
			}
			if (custom !== undefined) {
				if (!new RegExp(custom).test(val)) {
					setonError({ ...onerror, [name]: `value must be ${custom} format` })
				}
				else {
					let newObj = omit(errors, [name]);
					setErrors(newObj);
					setonError(newObj);
				}
			}
			else if (numeric) {
				let newObj = omit(errors, [name]);
				setErrors(newObj);
				setonError(newObj);
				if (!new RegExp(/^(0|[1-9][0-9]*)$/).test(val)) {
					setonError({ ...onerror, [name]: `only numeric values required!` })
				}
			}
			else if (alpha) {
				let newObj = omit(errors, [name]);
				setErrors(newObj);
				setonError(newObj);
				if (!new RegExp(/^[A-Za-z]+$/).test(val)) {
					setonError({ ...onerror, [name]: `only aplhabet values required!` })
				}
			}
			else if (alphanumeric) {
				let newObj = omit(errors, [name]);
				setErrors(newObj);
				setonError(newObj);
				if (!new RegExp(/^[a-zA-Z0-9_]*$/).test(val)) {
					setonError({ ...onerror, [name]: `only alpha-numeric value required!` })
				}
				else {
					let newObj = omit(errors, [name]);
					setErrors(newObj);
					setonError(newObj);
				}
			}
		}


		setValues({ ...values, [name]: val })
	} 

	// ..............................................................................................................................

	const handleSubmit = (event) => {
		if (event) event.preventDefault();
		if (Object.keys(errors).length === 0 && Object.keys(values).length !== 0) {
			callback();
		} else {
			let i = 0;
			while (i < event.target.elements.length - 1) {
				validateNow(event.target.elements[i])
				++i;
			}
		}
	}
	const validateNow = (event) => {
		if (event.type === "submit") return 0;
		let name = event.name;
		let val = event.value;
		let req = event?.attributes['input-required']?.value;
		let min = event?.attributes['min-length']?.value;
		let max = event?.attributes['max-length']?.value;
		let numeric = event?.attributes['input-numeric']?.value;
		let custom = event?.attributes['custom-pattern']?.value;
		let alphanumeric = event?.attributes['input-aplhanumeric']?.value;
		let alphanumericsymbol = event?.attributes['input-alphanumericsymbol']?.value;
		let alpha = event?.attributes['input-alpha']?.value;
		let type = event.type;

		if (req || min || max || custom || numeric || alpha || alphanumeric || alphanumericsymbol) {
			if (req && !val) {
				errorObj = { ...errorObj, [name]: `${name} is required, Please enter !` }
			}
			else {
				if (min || max) {
					if (val.length < min) {
						errorObj = { ...errorObj, [name]: `${min} value  required, Please enter !` }
					}
					else if (val.length > max) {
						errorObj = { ...errorObj, [name]: `value must be less than ${max} !` }
					}
				}
				if (custom !== undefined) {
					if (!new RegExp(custom).test(val)) {
						errorObj = { ...errorObj, [name]: `value must be ${custom} format` }
					}
				}
				else if (numeric) {
					if (!new RegExp(/^(0|[1-9][0-9]*)$/).test(val)) {
						errorObj = { ...errorObj, [name]: `only numeric values allowed!` }
					}
				}
				else if (alpha) {
					if (!new RegExp(/^[A-Za-z]+$/).test(val)) {
						errorObj = { ...errorObj, [name]: `only aplhabet values allowed!` }
					}
				}
				else if (alphanumeric) {
					if (!new RegExp(/^[a-zA-Z0-9_]*$/).test(val)) {
						errorObj = { ...errorObj, [name]: `only alpha-numeric values allowed!` }
					}
				}
				else if (alphanumericsymbol) {
					if (!new RegExp(/^[ A-Za-z0-9_@./#&+-]*$/).test(val)) {
						errorObj = { ...errorObj, [name]: `only alphanumeric and special character values allowed!` }
					}
				}
			}

		}

		setErrors(errorObj)
		setValues({ ...values, [name]: val })
	}


	return {
		values,
		errors,
		handleChange,
		handleSubmit
	}
}

export default useForm