export type Json = string | number | boolean | null | { [key: string]: Json } | Json[]

export interface Database {
  public: {
    Tables: {
      _prisma_migrations: {
        Row: {
          applied_steps_count: number
          checksum: string
          finished_at: string | null
          id: string
          logs: string | null
          migration_name: string
          rolled_back_at: string | null
          started_at: string
        }
        Insert: {
          applied_steps_count?: number
          checksum: string
          finished_at?: string | null
          id: string
          logs?: string | null
          migration_name: string
          rolled_back_at?: string | null
          started_at?: string
        }
        Update: {
          applied_steps_count?: number
          checksum?: string
          finished_at?: string | null
          id?: string
          logs?: string | null
          migration_name?: string
          rolled_back_at?: string | null
          started_at?: string
        }
        Relationships: []
      }
      commands: {
        Row: {
          created_at: string
          description: string
          id: number
          minute_limit: number
          name: string
          position: number
          require_lock: boolean
        }
        Insert: {
          created_at?: string
          description: string
          id?: number
          minute_limit?: number
          name: string
          position?: number
          require_lock?: boolean
        }
        Update: {
          created_at?: string
          description?: string
          id?: number
          minute_limit?: number
          name?: string
          position?: number
          require_lock?: boolean
        }
        Relationships: []
      }
      current_commands: {
        Row: {
          command_id: number | null
          created_at: string
          id: number
          updated_at: string
          user_id: number
        }
        Insert: {
          command_id?: number | null
          created_at?: string
          id?: number
          updated_at: string
          user_id: number
        }
        Update: {
          command_id?: number | null
          created_at?: string
          id?: number
          updated_at?: string
          user_id?: number
        }
        Relationships: [
          {
            foreignKeyName: 'current_commands_command_id_fkey'
            columns: ['command_id']
            referencedRelation: 'commands'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'current_commands_user_id_fkey'
            columns: ['user_id']
            referencedRelation: 'users'
            referencedColumns: ['id']
          },
        ]
      }
      last_used_commands: {
        Row: {
          command_id: number
          created_at: string
          id: number
          used_at: string
          user_id: number
        }
        Insert: {
          command_id: number
          created_at?: string
          id?: number
          used_at?: string
          user_id: number
        }
        Update: {
          command_id?: number
          created_at?: string
          id?: number
          used_at?: string
          user_id?: number
        }
        Relationships: [
          {
            foreignKeyName: 'last_used_commands_command_id_fkey'
            columns: ['command_id']
            referencedRelation: 'commands'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'last_used_commands_user_id_fkey'
            columns: ['user_id']
            referencedRelation: 'users'
            referencedColumns: ['id']
          },
        ]
      }
      log_messages: {
        Row: {
          created_at: string
          device_type: string | null
          has_media: boolean
          id: number
          message: string | null
          user_id: number
        }
        Insert: {
          created_at?: string
          device_type?: string | null
          has_media?: boolean
          id?: number
          message?: string | null
          user_id: number
        }
        Update: {
          created_at?: string
          device_type?: string | null
          has_media?: boolean
          id?: number
          message?: string | null
          user_id?: number
        }
        Relationships: []
      }
      users: {
        Row: {
          chat_id: string
          created_at: string
          id: number
          is_banned: boolean
          name: string | null
          number: string
          updated_at: string
        }
        Insert: {
          chat_id: string
          created_at?: string
          id?: number
          is_banned?: boolean
          name?: string | null
          number: string
          updated_at: string
        }
        Update: {
          chat_id?: string
          created_at?: string
          id?: number
          is_banned?: boolean
          name?: string | null
          number?: string
          updated_at?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
