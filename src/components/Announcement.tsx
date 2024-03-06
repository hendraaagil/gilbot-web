'use client'

import * as Dialog from '@radix-ui/react-dialog'
import Image from 'next/image'
import { HiXMark } from 'react-icons/hi2'

const Announcement = () => (
  <Dialog.Root defaultOpen>
    <Dialog.Portal>
      <Dialog.Overlay className="fixed inset-0 bg-slate-700 bg-opacity-75 backdrop-blur data-[state=open]:animate-overlayShow" />

      <Dialog.Content className="fixed left-1/2 top-1/2 w-full max-w-2xl -translate-x-1/2 -translate-y-1/2 p-2 focus:outline-none data-[state=open]:animate-contentShow">
        <div className="rounded border-4 bg-green-600 bg-gradient-to-br from-green-700 p-4 text-white shadow">
          <Dialog.Title className="py-2 text-center text-2xl font-bold">GilBot Pamit dari WhatsApp 👋</Dialog.Title>

          <Dialog.Description className="my-4" asChild>
            <div className="space-y-4">
              <Image
                src="/ban.jpg"
                alt="Screenshot of WhatsApp ban"
                width={192}
                height={376}
                className="mx-auto border border-green-500"
              />
              <p>
                GilBot di WhatsApp harus berhenti karena sudah terdeteksi spam oleh WhatsApp, tapi perjalanan kita belum
                berakhir. Kita sedang mempertimbangkan untuk memindahkan layanan ini ke platform baru yang lebih ramah,
                seperti Telegram.
              </p>
              <p>Terima kasih atas dukungan kalian!</p>
              <hr />
              <p className="text-sm font-semibold">
                <a href="https://hendraaagil.dev" className="hover:underline" target="_blank" rel="noopener noreferrer">
                  Hendra Agil
                </a>
              </p>
            </div>
          </Dialog.Description>

          <Dialog.Close asChild>
            <button
              className="absolute right-6 top-6 appearance-none items-center justify-center rounded-full focus:shadow focus:outline-none"
              aria-label="Close"
            >
              <HiXMark size={20} />
            </button>
          </Dialog.Close>
        </div>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
)

export default Announcement
