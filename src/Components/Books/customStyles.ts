const customStyles = {

    option: (provided: any, state: { isSelected: any; }) => ({
        ...provided,
        borderBottom: '1px dotted pink',
        color: state.isSelected ? 'red' : 'blue',
        padding: 20,
    }),
    control: () => ({
        // none of react-select's styles are passed to <Control />
        width: 200,
    }),
    singleValue: (provided: any, state: { isDisabled: any; }) => {
        const opacity = state.isDisabled ? 0.5 : 1;
        const transition = 'opacity 300ms';

        return {...provided, opacity, transition};
    }
}
export default customStyles;