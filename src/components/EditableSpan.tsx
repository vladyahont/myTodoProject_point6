import React, {ChangeEvent, useState} from 'react';

type EditableSpanType = {
    title: string
    callback: (newTitle: string) => void
}

export const EditableSpan = (props: EditableSpanType) => {
    const [edit, setEdit] = useState<boolean>(false)
    let [newTitle, setNewTitle] = useState(props.title)


    const onClickHandler = () => {
        setEdit(!edit)
        props.callback(newTitle)
    }
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTitle(e.currentTarget.value)
    }

    return (
        edit
            ? <input value={newTitle} onBlur={onClickHandler} onChange={onChangeHandler} autoFocus/>
            : <span onClick={onClickHandler} >{props.title}</span>
    )
}
