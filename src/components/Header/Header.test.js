import { render, screen } from "@testing-library/react"
import Header from "./Header"


it('render title',()=>{
    let testTitle = 'test title'
    render(<Header title= {testTitle}/>)
    let el  = screen.getByText(testTitle)
    expect(el).toBeInTheDocument()
})
it('render title with other select method' ,()=>{
    let testTitle = 'test title'
    render(<Header title= {testTitle}/>)
    let el  = screen.getByRole('heading',{name:testTitle})
    expect(el).toBeInTheDocument()
})
it('render title with other select by testid' ,()=>{
    let testTitle = 'test title'
    render(<Header title= {testTitle}/>)
    let el  = screen.getByTestId('id')
    expect(el).toBeInTheDocument() 
})
 
// find
it('render title find',async ()=>{
    let testTitle = 'test title'
    render(<Header title= {testTitle}/>)
    let el  = await screen.findByText(testTitle)
    expect(el).toBeInTheDocument()
})

// query
it('render title query', ()=>{
    let testTitle = 'test title'
    render(<Header title= {testTitle}/>)
    let el  =  screen.queryByText('dog')
    expect(el).toBeNull()
})
// get all
it('render title getAll', ()=>{
    let testTitle = 'test title'
    render(<Header title= {testTitle}/>)
    let el  =  screen.getAllByRole('heading')
    expect(el.length).toBe(1)
})