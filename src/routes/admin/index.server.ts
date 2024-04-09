import type { PageServerLoad } from './$types';
import { error } from '@sveltejs/kit';

// store this in a file and import it wherever you need it
function isAdmin(locals: App.Locals) {
  if (!locals?.roles || !locals?.roles?.includes('admin')) {
    throw error(401, 'Unauthorized');
  }
}

export const load = (({ locals }) => {
  isAdmin(locals);
}) satisfies PageServerLoad;