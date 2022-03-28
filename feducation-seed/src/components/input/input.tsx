const Input = ({id, value, type = 'text', placeholder, onInputChange, children}: any) => (
    <>
        <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor={id}>{children}</label>
        <input
            id={id}
            type={type}
            value={value}
            placeholder={placeholder}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
            onChange={onInputChange}
        />
    </>
)
export default Input;

