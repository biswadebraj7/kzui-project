import CustomSelect from "./Component/CustomSelect";


const options = [
  { value: 'apple', label: 'Apple' },
  { value: 'banana', label: 'Banana' },
  { value: 'cherry', label: 'Cherry' },
];

const groupedOptions = [
  {
    label: 'Language',
    options: [
      { value: 'javascript', label: 'JavaScript' },
      { value: 'python', label: 'Python' },
      { value: 'ruby', label: 'Ruby'},
      { value: 'go', label: "Go"}
    ],
  },
  {
    label: 'Technology',
    options: [
      { value: 'reactjs', label: 'React JS' },
      { value: 'nextjs', label: 'Next JS' },
      { value: 'typescript', label: "TypeScript"},
      { value: 'laravel', label: 'Laravel'},
      { value: 'django', label: "Django"}
    ],
  },
  {
    label: 'Tools',
    options: [
      {value: 'git', label: 'Git'},
      {value: 'github', label: 'Github'},
      {value: 'vercel', label: 'Vercel'},

    ]
  }
];

const App = () => {
  
  return (
    <div className="kzui-body">
      <div className='kzui-title'>
      <h1> Select Component</h1>
      </div>
    <CustomSelect
     isClearable
     isSearchable
     isDisabled={false}
     options={groupedOptions}
     value={null}
     placeholder="Select an option"
     isGrouped
     isMulti
     onChangeHandler={(val) => console.log('Selected:', val)}
     onMenuOpen={() => console.log('Menu opened')}
     onSearchHandler={(text) => console.log('Search text:', text)}
    >

    </CustomSelect>

    </div>
  )
}

export default App