'use client'

import Link from 'next/link'
import { ArrowLeft, Construction } from 'lucide-react'

export default function Page() {
    return (
        <main className="min-h-screen w-full flex flex-col items-center justify-center px-6 bg-[#101d27] text-[#f2f4f2] text-center [font-family:'DM_Sans',sans-serif]">
            <div className="flex flex-col items-center max-w-[480px]">
                <div className="w-16 h-16 rounded-full border border-[#29404b] flex items-center justify-center mb-8">
                    <Construction size={26} className="text-[#c6ff3d]" />
                </div>

                <p className="[font-family:'JetBrains_Mono',monospace] text-[10px] tracking-[0.16em] uppercase text-[#91a0a4] mb-4">
                    Blog / Coming soon
                </p>

                <h1 className="text-[clamp(32px,6vw,56px)] font-bold tracking-[-0.04em] leading-[1] mb-5">
                    Under construction<span className="text-[#c6ff3d]">.</span>
                </h1>

                <p className="text-[14px] md:text-[15px] leading-[1.7] text-[#91a0a4] mb-10">
                    I&apos;m still writing the first posts. Check back soon for notes on things I&apos;m building, learning, and breaking along the way.
                </p>

                <Link
                    href="/"
                    className="inline-flex items-center gap-2 border border-[#29404b] rounded-full px-6 py-3 text-[13px] font-medium text-[#f2f4f2] hover:border-[#c6ff3d] hover:text-[#c6ff3d] transition-colors"
                >
                    <ArrowLeft size={16} />
                    Back to home
                </Link>
            </div>
        </main>
    )
}