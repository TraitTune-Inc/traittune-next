'use client'

import { signIn, signOut, useSession } from 'next-auth/react'

export default function LoginButton() {
  const { data: session } = useSession()

  if (session && session.user) {
    return (
      <div className="flex items-center space-x-4">
        <p className="text-sm">Signed in as {session.user.email}</p>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => signOut()}
        >
          Sign out
        </button>
      </div>
    )
  }
  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      onClick={() => signIn('google')}
    >
      Sign in with Google
    </button>
  )
}