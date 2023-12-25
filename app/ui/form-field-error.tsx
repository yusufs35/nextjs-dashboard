import React from 'react';

const FormFieldError = ({
  areaId,
  errors,
}: {
  areaId: string;
  errors: any[] | undefined;
}) => {
  if (!errors || errors.length <= 0) return null;

  return (
    <div id={areaId} aria-live="polite" aria-atomic="true">
      {errors.map((error: string) => (
        <p className="mt-2 text-sm text-red-500" key={error}>
          {error}
        </p>
      ))}
    </div>
  );
};

export default FormFieldError;
