/**
 * @author mrdoob / http://mrdoob.com/
 */

function WebGLObjects( geometries, info ) {

	var updateList = {};

	function update( object, renderId ) {

		var geometry = object.geometry;
		var buffergeometry = geometries.get( object, geometry );

		// Update once per call to renderer.render

		if ( updateList[ buffergeometry.id ] !== renderId ) {

			if ( geometry.isGeometry ) {

				buffergeometry.updateFromObject( object );

			}

			geometries.update( buffergeometry );

			updateList[ buffergeometry.id ] = renderId;

		}

		return buffergeometry;

	}

	function dispose() {

		updateList = {};

	}

	return {

		update: update,
		dispose: dispose

	};

}


export { WebGLObjects };
