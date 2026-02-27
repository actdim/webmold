import React from 'react';
import ReactDOM from 'react-dom/client';
import ShadcnRoot from './ShadcnRoot';

/* https://ui.shadcn.com/themes */

/* cd apps/webapp && pnpm dlx shadcn@canary add accordion alert alert-dialog aspect-ratio avatar badge breadcrumb button calendar card carousel chart checkbox collapsible command context-menu dialog drawer dropdown-menu form hover-card input input-otp label menubar navigation-menu pagination popover progress radio-group resizable scroll-area select separator sheet sidebar skeleton slider sonner switch table tabs textarea toggle toggle-group tooltip */

ReactDOM.createRoot(document.getElementById('root')!).render(<ShadcnRoot />);
