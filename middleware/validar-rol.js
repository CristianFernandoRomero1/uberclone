const validarRoles = (...roles) => {
    return (req, res, next) => {
        console.log(roles);
        console.log("validando roles")
        //console.log(req.usuario);
        console.log(req.usuario.rol);
        //||x  req.usuario.rol !== roles || 
        if (!roles.includes(req.usuario.rol)) {
            console.log(roles.includes(req.usuario));
            return res.status(401).json({
                msg: `El servicio requiere uno de estos roles ${roles}`
            })
        }
        next()
    }
}
export default validarRoles;