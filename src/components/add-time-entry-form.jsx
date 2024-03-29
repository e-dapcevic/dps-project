import React , {useState} from 'react'

import firebase from '../firebase'

const AddTimeEntryForm = () => {
    const [title,setTitle] = useState('')
    const [time,setTime] = useState('')

    function onSubmit(e) {
        e.preventDefault()

        firebase
        .firestore()
        .collection('times')
        .add({
            title,
            time_second: parseInt(time)    
        })
        .then(()=>
            {
                setTitle('')
                setTime('')
            }
        )

    }

    return (
        <form onSubmit={onSubmit}>
            <h4>Add Time Entry</h4>
            <div>
                <label>Title</label>
                <input type="test" value={title} onChange={e => setTitle(e.currentTarget.value)}/>
            </div>
            <div>
                <label>Time</label>
                <input type="number" value={time} onChange={e => setTime(e.currentTarget.value)}/>
            </div>
            <button>Add Time Entry</button>
        </form>

    )
}

export default AddTimeEntryForm