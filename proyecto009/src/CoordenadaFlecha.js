import { useEffect, useState } from "react";

export function CoordenadaFlecha() {
    const [posicion , setPosicion] = useState({x:0,y:0});

    useEffect(() => {
        window.addEventListener("mousemove", fijarPosicion);
        return () => {
            window.removeEventListener("mousemove", fijarPosicion);
            console.log("Se borro el registro de eventos.");
        }
    }, [])

    function fijarPosicion(e) {
        setPosicion({x:e.clientX, y:e.clientY});
    }

    return (
        <div>
            <h1>Coordenadas del Mouse</h1>
            <h2>X: {posicion.x} Y: {posicion.y}</h2>
        </div>
    );
}