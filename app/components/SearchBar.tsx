import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const scenarios = [
  { id: 1, name: 'Личный запрос' },
  { id: 2, name: 'Запрос для двоих' },
  { id: 3, name: 'Групповой запрос' },
  { id: 4, name: 'Создание проекта' },
  { id: 5, name: 'Приглашение участников' },
];

const SearchBar: React.FC = () => {
  const [query, setQuery] = useState('');
  const [selectedScenario, setSelectedScenario] = useState<number | null>(null);
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query && selectedScenario) {
      // Здесь будет логика обработки запроса
      console.log(`Запрос: ${query}, Сценарий: ${selectedScenario}`);
      router.push(`/query?scenario=${selectedScenario}&q=${encodeURIComponent(query)}`);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="scenario">
            Выберите сценарий
          </label>
          <select
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="scenario"
            value={selectedScenario || ''}
            onChange={(e) => setSelectedScenario(Number(e.target.value))}
          >
            <option value="">Выберите сценарий</option>
            {scenarios.map((scenario) => (
              <option key={scenario.id} value={scenario.id}>
                {scenario.name}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="query">
            Введите ваш запрос
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="query"
            type="text"
            placeholder="Введите ваш запрос"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Поиск
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;