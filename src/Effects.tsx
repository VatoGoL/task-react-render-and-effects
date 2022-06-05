import { subscribe, unsubscribe } from './resources/API';
import { useState, useEffect } from 'react';

export function Effects(props: { sourceId: string }) {
    const [res, setRes] = useState(-1);
    const [source, setSource] = useState(props.sourceId);

    useEffect(() => {
        if (source !== props.sourceId) {
            setRes(-1);
            setSource(props.sourceId);
        }
        subscribe(props.sourceId, setRes);
        return () => {
            unsubscribe(props.sourceId, setRes);
        };
    });

    return (
        <>
            <div>
                {props.sourceId}: {res}
            </div>
        </>
    );
}
