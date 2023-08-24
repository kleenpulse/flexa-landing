import { useEffect, useMemo, useState } from "react";

export const useInView = (ref) => {
    const [isViewing, setIsViewing] = useState(false);

    const observer = useMemo(
        () =>
            new IntersectionObserver(([entries]) =>
                setIsViewing(entries.isIntersecting)
            ),
        []
    );

    useEffect(() => {
        observer.observe(ref.current);

        return () => {
            observer.disconnect();
        };
    }, [ref, observer]);


    return isViewing;
};