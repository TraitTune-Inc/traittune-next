'use client';

import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';

const QueryPage: React.FC = () => {
  const searchParams = useSearchParams();
  const [scenario, setScenario] = useState<string | null>(null);
  const [query, setQuery] = useState<string | null>(null);

  useEffect(() => {
    setScenario(searchParams.get('scenario'));
    setQuery(searchParams.get('q'));
  }, [searchParams]);

  if (!scenario || !query) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Обработка запроса</h1>
      <p>Сценарий: {scenario}</p>
      <p>Запрос: {query}</p>
      {/* Здесь будет дальнейшая логика обработки запроса */}
    </div>
  );
};

export default QueryPage;