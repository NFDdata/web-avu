const auth = {
  'auth.token_no_valid': 'Acceso denegado',
  'auth.no_match': 'Usuario no existe o la contraseña es incorrecta',
  'user.not_found': 'Usuario no existe o la contraseña es incorrecta',
  'user.created': 'Usuario creado correctamente',
  'Usuario ingresado con éxito.': '¡Bienvenido al ADMINISTRADOR de VICA!'
};

const block = {
  'block.created': '¡Bloque creado con éxito!',
  'block.updated': '¡Bloque modificado con éxito!',
  'block.deleted': '¡Bloque eliminado con éxito!',
  'block.not_found': 'Bloque no encontrado.'
};

const user = {
  'user.updated': '¡Usuario modificado con éxito!',
  'user.deleted': '¡Usuario eliminado con éxito!',
  'user.has_unit_in_community': 'Usuario tiene una unidad en la comunidad.',
  'user.email_not_unique': 'El email del usuario ya existe.',
  'user.phone_not_unique': 'El teléfono del usuario ya existe.',
  'user.identifier_not_unique': 'El rut del usuario ya existe.'
};

const bulkload = {
  'bulkCreate.error': 'El archivo ingresado es incorrecto',
  'bulkCreate.partial_error': 'El archivo tiene errores',
  'bulkCreate.success': 'El archivo ha sido cargado con exito'
};

const unit = {
  'unit.not_found': 'Unidad no encontrada',
  'unit.created': '¡Unidad creada con éxito!',
  'unit.deleted': '¡Unidad eliminada con éxito!',
  'unit.updated': '¡Unidad modificada con éxito!'
};

const entrance = {
  'entrance.not_found': 'Entrada no encontrada',
  'entrance.created': '¡Entrada creada con éxito!',
  'entrance.updated': '¡Entrada modificada con éxito!',
  'entrance.deleted': '¡Entrada eliminada con éxito!'
};

const zone = {
  'zone.not_found': 'Zonas no encontradas',
  'zone.created': '¡Zona creada con éxito!',
  'zone.updated': '¡Zona modificada con éxito!',
  'zone.deleted': '¡Zona eliminada con éxito!'
};

const vehicles = {
  'vehicle.created': '¡Vehículo creado con éxito!',
  'vehicle.updated': '¡Vehículo modificado con éxito!',
  'vehicle.deleted': '¡Vehículo eliminado con éxito!',
  'error.plate_not_unique': 'Vehículo existente.'
};

const configCommunity = {
  'community.updated': '¡Método de acceso actualizado!'
};

const accessMethod = {
  'accessMethod.updated': 'El pin se ha actualizado.',
  'pubsub.publish.success': 'La puerta ha sido abierta.'
};

export const Dictionary = {
  ...auth,
  ...block,
  ...user,
  ...unit,
  ...bulkload,
  ...entrance,
  ...zone,
  ...vehicles,
  ...configCommunity,
  ...accessMethod
};
