const auth = {
  'auth.token_no_valid': 'Acceso denegado',
  'auth.no_match': 'Usuario no existe o la contraseña es incorrecta',
  'user.not_found': 'Usuario no existe o la contraseña es incorrecta',
  'user.created': 'Usuario creado correctamente',
  'Usuario ingresado con éxito.': '¡Bienvenido!'
};

const user = {
  'user.updated': '¡Usuario modificado con éxito!',
  'user.deleted': '¡Usuario eliminado con éxito!',
  'user.has_unit_in_community': 'Usuario tiene una unidad en la comunidad.',
  'user.email_not_unique': 'El email del usuario ya existe.',
  'user.phone_not_unique': 'El teléfono del usuario ya existe.',
  'user.identifier_not_unique': 'El rut del usuario ya existe.'
};


export const Dictionary = {
  ...auth,
  ...user,
};
